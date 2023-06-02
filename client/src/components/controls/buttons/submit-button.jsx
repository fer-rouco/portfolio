import Button from './button';

export default function SubmitButton(props) {
  return <Button type="submit" {...props} >{props.children || 'Submit'}</Button>;
}
