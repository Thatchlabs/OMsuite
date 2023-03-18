import React, { ReactElement, ReactNode } from 'react';


function Heading({title}:{title:string}){
  return <h1>{title}</h1>
  
}

function HeadingwithContent({children}:{children:ReactNode}):ReactElement{
  return <h1>{children}</h1>
}
// Default Props
type ContainerProps = { children:ReactNode} & typeof DefaultContainerProps
const DefaultContainerProps = {
  heading: <strong>My Heading</strong>
}
function Container({
  heading,
  children
}:ContainerProps):ReactElement{
  return <div><h1>{heading}</h1>{children}</div>
}
Container.defaultProps =DefaultContainerProps
// Functional Props 
function NumberOfItems({
  children
} :{
  children : (num: number) => ReactNode
  }){
    const [state,stateSet] = React.useState<number>(1);
    return <div>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  }



const Home = () => {
    return (
    <div>
     <main className='Container'>
        <Heading title='Hello You, Hello... React'></Heading>
        <HeadingwithContent>Hi</HeadingwithContent>
        <Container>
            Foo
        </Container>
        <NumberOfItems>{(num: number)=><div>Mint {num} Item(s)</div>}</NumberOfItems>
      </main>    
    </div>
    );
  };
  
  export default Home;