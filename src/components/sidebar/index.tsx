import SidebarComponent from './sidebar'


function Sidebar(props: any) {
  return (
    <div>
      <SidebarComponent pages={props.pages} />
    </div>
  )
}

export default Sidebar
