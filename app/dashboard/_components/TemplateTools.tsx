import Templates from '@/app/(data)/Templates'
import React, { useEffect } from 'react'
import TemplatesCard from './TemplatesCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[],
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean,
}

const TemplateTools = ({ userSearchInput }: any) => {
    const [toolsList, setToolsList] = React.useState<TEMPLATE[]>(Templates);

    useEffect(() => {
        if (userSearchInput) {
            const filterData = Templates.filter((item) =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setToolsList(filterData);
        } else {
            setToolsList(Templates);
        }
    }, [userSearchInput]);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
            {toolsList.map((tools: TEMPLATE, key: number) => (
                <TemplatesCard key={tools.slug || key} {...tools} />
            ))}
        </div>
    );
};

export default TemplateTools;
