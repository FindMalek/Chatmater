export default function AboutPage(
    { params }: { params: { section: string } }
) {
    return (
        <div>
            <h1>About {params.section}</h1>
        </div>
    )
}   