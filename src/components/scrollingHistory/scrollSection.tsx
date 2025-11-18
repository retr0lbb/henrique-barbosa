interface ScrollSectionProps{
    year: number,
    children: string,
    isOnStart?: boolean
    isOnEnd?: boolean
}

export function ScrollSection(props: ScrollSectionProps){
    return (
        <div className="w-full min-h-dvh flex px-4 gap-10">
            <div className="min-h-full min-w-60 flex flex-col relative items-center justify-center">
                <div className={`min-h-full max-w-1 bg-linear-to-b absolute inset-0 left-6 
                    ${props.isOnStart ? "from-zinc-950" : "from-blue-500"} 
                    via-cyan-400 
                    ${props.isOnEnd ? "to-zinc-950" : "to-blue-500"}
                    ${props.isOnStart && "rounded-t-full"} 
                    ${props.isOnEnd && "rounded-b-full"}`}>
                </div>
                <div className="flex items-center gap-5">
                    <div className="h-2 max-w-10 min-w-10 bg-blue-500" />
                    <h1 className="text-7xl font-bold text-zinc-200">{props.year}</h1>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
               {props.children}
            </div>
        </div>
    )
}