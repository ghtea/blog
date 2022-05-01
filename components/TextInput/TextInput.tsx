import {Box} from "@mui/system"
import {ChangeEvent, ChangeEventHandler, FocusEventHandler, ReactNode, useCallback, useState} from "react"
import {Icon} from "components/Icon"

export type TextInputProps = {
  children?: ReactNode
  value: string
  placeholder?: string
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>)=>void
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  label?: string | null
  type?: "email" | "password" | "text";
  clearDisabled?: boolean
  right?: ReactNode
}

export const TextInput = ({
  children,
  onChange,
  onBlur,
  onFocus,
  value,
  label,
  clearDisabled = false,
  right,
  type = "text",
  ...rest
}: TextInputProps) => {
  const [localValue, setLocalValue] = useState("")
  const [focused, setFocused] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    setLocalValue(event.currentTarget.value)
    onChange?.(event.currentTarget.value, event)
  },[onChange])

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onBlur?.(event)
    setFocused(false)
  },[onBlur])

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onFocus?.(event)
    setFocused(true)
  },[onFocus])

  const handleClearClick = useCallback(()=>{
    setLocalValue("")
    onChange?.("")
  },[onChange])
  
  return (
    <Box component={"label"} 
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
      }}>
      {label && (
        <Box sx={{
          color: "text.default",
          fontSize: "0.875rem",
          marginBottom: "6px",
        }}>
          {label}
        </Box>
      )}
      <Box sx={{
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
        borderWidth: 1,
        borderBottomStyle: "solid",
        borderColor: focused ? "input.default.focus.border" : "input.default.border",
        borderRadius: "8px",
        color: "input.default.focus.outline",
        outlineStyle: focused ? "solid" : "none",
        outlineWidth: "4px",
        outlineColor: "inherit",
        paddingX: "14px",
        paddingY: "10px",
        borderStyle: "solid",
      }}>
        <Box 
          component={"input"}
          type={type}
          {...rest}
          value={value || localValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5,
            flex: 1,
            color: "text.default",
            backgroundColor: "transparent",
            outline: "none",
            appearance: "none",
            border: "none",
            padding: 0,
            "&::placeholder": {
              fontSize: "1rem",
              padding: 0,
              lineHeight: 1.5,
              color: "text.hint",
            },
          }}
        />
        <Box component={"span"} sx={{display: "inline-flex", alignItems: "center"}}>
          {right}
          {clearDisabled ? null : (
            <Box
              onClick={handleClearClick}
              sx={{
                display: (value || localValue) ? "inline-flex" : "none",
                cursor: "pointer",
              }}
            >
              <Icon name={"close-circle"} color={"input.default.icon"}/>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}