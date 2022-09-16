import Dropdown from '../components/Dropdown'
import '../utils/styles/About.css'

export default function About() {
    return (
        <section className="about">
            <div className="about-main"></div>
            <Dropdown title="Fiabilité" style={{ width: "64em" }}>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </Dropdown>
            <Dropdown title="Respect" style={{ width: "64em" }}>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Dropdown>
            <Dropdown title="Service" style={{ width: "64em" }}>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </Dropdown>
            <Dropdown title="Sécurité" style={{ width: "64em" }}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Dropdown>
        </section>
    )
}