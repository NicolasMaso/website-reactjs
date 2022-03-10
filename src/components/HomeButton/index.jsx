import { Button }from "./style";

export default function HomeButton(props) {
    return  (
        <Button onClick={props.click}>{props.text}</Button>
    )
  }