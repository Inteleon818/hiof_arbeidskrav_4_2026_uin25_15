export default function Arbeidskrav({wR}) 
{
    return (
        <article className="arbeidskrav_artikkel">
            <h4>{wR.workRequirementTitle}</h4>
            <p className="arbeidskrav_p">{wR.workRequirementDescription}</p>
        </article>
    )
}