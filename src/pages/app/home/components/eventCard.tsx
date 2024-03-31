import { Tag } from './tag';

import { User, MapPin, Clock, ChevronRight } from 'lucide-react'
import { Star, ThumbsUp } from '@phosphor-icons/react';

type Props = {
    image: string;
    title: string;
    subtitle: string;
    author: string;
    locale: string;
    date: string;
}

export function EventCard({ image, title, subtitle, author, locale, date }: Props) {
    return (
        <div className="w-[448px] bg-zinc-50 rounded mb-2">
            <div className="relative">
                <img 
                    src={image} 
                    alt="Imagem do Evento" 
                    className="rounded-t"
                />

                <div className="absolute inset-0 bg-zinc-950 opacity-50"/>

            </div>
            
            <div className="ml-4 mr-4 mt-6">
                <p className="text-xl text-zinc-950 font-medium">
                    {title}
                </p>
                <p className="text-base text-zinc-500 font-medium mt-2   ">
                    {subtitle}
                </p>

            </div>

            <div className="flex flex-row mt-4 ml-4 gap-2">
                <Tag text='Doação' />
                <Tag text='Roupas' />

            </div>

            <div className="mt-6 ml-4">
                <div className='flex flex-row items-center mb-1'>
                    <User color='#22C55E' size={14} />

                    <p className="text-zinc-500 text-sm font-medium ml-2">
                        {author}
                    </p>

                </div>

                <div className='flex flex-row items-center mb-1'>
                    <MapPin color='#22C55E' size={14} />

                    <p className="text-zinc-500 text-sm font-medium ml-2">
                        {locale}
                    </p>

                </div>

                <div className='flex flex-row items-center'>
                    <Clock color='#22C55E' size={14} />

                    <p className="text-zinc-500 text-sm font-medium ml-2">
                        {date}
                    </p>

                </div>

            </div>

            <div className="flex flex-row justify-between mt-4 ml-4 mr-4 pb-2">
                <button className="flex flex-row items-center justify-center bg-green-700 w-32 h-10 rounded">
                    Ver Mais

                    <ChevronRight color='#FAFAFA' size={20} />

                </button>

                <div className='flex flex-row'>
                    <button className="flex items-center justify-center bg-zinc-300 rounded-full w-10 h-10 mr-4">
                        <ThumbsUp color='#71717A' size={24} weight='fill' />

                    </button>

                    <button className="flex items-center justify-center bg-zinc-300 rounded-full w-10 h-10">
                        <Star color='#71717A' size={24} weight='fill' />

                    </button>

                </div>

            </div>
        </div>
    );
}