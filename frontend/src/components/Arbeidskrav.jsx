export default function Arbeidskrav({wR}) 
{
    return (
        <>
            <h2>{wR.workRequirementTitle}</h2>
            <p className="wRP">{wR.workRequirementDescription}</p>
        </>
    )
}