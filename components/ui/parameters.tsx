import React from 'react'
import Button from './button'
import { Parameter } from '@/types'

interface ParametersProps {
    data: Parameter[]
}

const Parameters: React.FC<ParametersProps> = ({ data }) => {
    return (
        <div className="text-base text-gray-500 flex flex-wrap items-center gap-x-2">
            {data?.length === 0 && "No parameters"} {data?.map((each) => <Button className="bg-neutral-100 py-[0.30rem] text-slate-500 text-sm lowercase" key={each.id}>{each.name}</Button>)}
        </div>
    )
}

export default Parameters