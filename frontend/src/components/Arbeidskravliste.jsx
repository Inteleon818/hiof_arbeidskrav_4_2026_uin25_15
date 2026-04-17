import { useState } from 'react'
import client from '../helpers/client.js'
import { useEffect } from 'react'
import Arbeidskrav from './Arbeidskrav.jsx'

export default function Arbeidskravliste() 
{
    const [workRequirements, setWorkRequirements] = useState(null)

    useEffect(() => {
        async function fetchAllWorkRequirements() 
        {
            const allWorkRequirements = await client.fetch("*[_type == 'workRequirement']{_id, workRequirementTitle, workRequirementDescription} | order(workRequirementTitle asc)")
            setWorkRequirements(allWorkRequirements)
        }

        fetchAllWorkRequirements()
    }, [])

    console.log("Arbeidskravliste_workRequirements", workRequirements)

    return (
        <>
        <section className="arbeidskrav arbeidskrav_section">
            <h3 className="arbeidskrav arbeidskrav_tittel">Arbeidskrav i UaIN</h3>
            {workRequirements?.map(wR => <Arbeidskrav key={wR._id} wR={wR} />)}
        </section>
        </>
    )
}