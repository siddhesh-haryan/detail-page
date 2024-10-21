import { ArrowRight } from 'lucide-react'
import ButtonWithArrow from './ButtonWithArrow';

export default function CompanyStats() {
  return (
    <div className="bg-zinc-100 p-8 rounded-3xl max-w-4xl mx-auto border-2 md:py-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <StatItem value="8+" label="Years in Business" />
        <StatItem
          value="3000+"
          label={
            <>
              Software Projects
              <br />
              Delivered Successfully
            </>
          }
        />
        <StatItem value="87%" label="Recurring Client Base" />
      </div>
    <div className="text-center mt-4 md:mt-0">
      <ButtonWithArrow href="/about/">
        Let&apos;s discuss Your Project Ideas
      </ButtonWithArrow>
    </div>
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2">{value}</div>
      <div className="h-1 bg-gray-500 w-20 mx-auto mb-2"></div>
      <div className="text-sm md:text-base lg:text-lg opacity-80">{label}</div>
    </div>
  )
}