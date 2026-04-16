export default function Arbeidskrav({wR}) 
{
    return (
        <>
            <h4>{wR.workRequirementTitle}</h4>
            <p className="wRP">{wR.workRequirementDescription}</p>
        </>
    )
}