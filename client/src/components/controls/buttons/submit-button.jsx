import Button from './button';
import { useTranslation } from "react-i18next";

export default function SubmitButton(props) {
  const { t } = useTranslation('components', { keyPrefix: 'controls.buttons' });
  return <Button type="submit" {...props} >{props.children || t('submit')}</Button>;
}
