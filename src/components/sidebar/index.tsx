import SidebarComponent from '../ui/sidebar'


function Sidebar(props: any) {
  return (
    <div>
      <SidebarComponent pages={props.pages} />
    </div>
  )
}

export default Sidebar
