import { Button } from "flowbite-react"
import { FC } from "react"

interface PropsButton{
  className: string,
  onClick(): void
}

const LoadingButton: FC<PropsButton> = (props) => {
    const {className, onClick} = props

  return (
    <Button onClick={onClick} className={className} color="dark">Click Me</Button>
  )
}

export default LoadingButton