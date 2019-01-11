import myItem from '@/page/home/components/myItem'
export default {
  path:'/home',
  name:'home',
  component:home,
  children:[
    {
      path:'myItem',
      name:'myItem',
      component:myItem,
    }
  ]
}
