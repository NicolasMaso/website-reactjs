import {Button} from "./style";

export default function LoginButton(props) {
    return  (
        <Button onClick={props.click}>{props.text}</Button>
    )
  }