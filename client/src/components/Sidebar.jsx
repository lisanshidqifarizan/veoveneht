import SupportCard from './SidebarComponents/SupportCard.jsx'
import Tags from './SidebarComponents/Tags.jsx'

export default function Sidebar() {
    return (
        <>
        <div id="sidebar">
            <div className='sticky'>
                <SupportCard/>
                <Tags/>
            </div>
        </div>
        </>
    )
}