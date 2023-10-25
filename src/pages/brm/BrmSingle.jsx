import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion } from 'flowbite-react'

import { Error, Loader } from '../../components'

import { getter } from "./Brm"
import i18next from 'i18next'

export const BrmSingle = () => {
    const { name } = useParams()

    const [brmSingle, setBrmSingle] = useState()

    useEffect(() => {
        getter(`brm/${name}`, setBrmSingle)
    }, [])

    if (brmSingle?.loading) return <Loader />
    if (brmSingle?.error) return <Error error={brmSingle?.error} />
    return (
        <div className='container py-10'>
            <Accordion collapseAll>
                {
                    brmSingle?.data?.child?.map(item => (
                        <Accordion.Panel>
                            <Accordion.Title className='bg-white hover:bg-stone-50'>
                                {item[`title_${i18next.language}`]}
                            </Accordion.Title>
                            <Accordion.Content className='bg-slate-50'>
                                <div dangerouslySetInnerHTML={{ __html: item[`body_${i18next.language}`] }} />
                            </Accordion.Content>
                        </Accordion.Panel>
                    ))
                }
            </Accordion>
        </div>
    )
}
