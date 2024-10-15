import { cn } from '@/lib/utils'

const ProductPrice = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  const stringValue = value.toString()
  const [intValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']
  return (
    <p className={cn('text-2xl', className)}>
      {intValue} บาท
      <span className="text-xs align-super"></span>
    </p>
  )
}

export default ProductPrice
