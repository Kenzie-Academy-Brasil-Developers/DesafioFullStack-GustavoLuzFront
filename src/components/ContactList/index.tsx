import { Link } from "react-router-dom"

export const ConactList = () => {
    // const { scrapList } = useContext(ScrapContext);
    return(
        <section>
            <div>
                <h1 className="title">Lista de contatos</h1>
                <Link className="btn solid" to="/contact/create">Deixar scrap</Link>
            </div>
            <ul>
                {scrapList.map(scrap => (
                    <ScrapCard key={scrap.id} scrap={scrap} />
                ))}
            </ul>
        </section>
    )
}