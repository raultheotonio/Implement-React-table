import React from 'react'
import Table from '../components/Table'


function App() {
  const data = React.useMemo(
    () => [
      {
        Name: 'Raul Theotonio',
        age: '28',
      },
      {
        Name: 'Pedro Juliano',
        age: '30',
      },
      {
        Name: 'Maria Rita',
        age: '18',
      },
      {
        Name: 'Marcio Renato',
        age: '30',
      },
      {
        Name: 'Fernando Marcos',
        age: '80',
      },
      {
        Name: 'Julio Renato',
        age: '70',
      },
      {
        Name: 'Luciana Marta',
        age: '10',
      },
      {
        Name: 'Gabriela Castro',
        age: '15',
      },
      {
        Name: 'Maria José',
        age: '28',
      },
      {
        Name: 'Fernando Teste',
        age: '10',
      },
      {
        Name: 'Maria eduarda',
        age: '10',
      },
      {
        Name: 'Eduardo Ronaldo',
        age: '60',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome Completo',
        accessor: 'Name',
      },
      {
        Header: 'Idade',
        accessor: 'age',
      },
    ],
    []
  )
  
  return (
      <Table columns={columns} data={data} />
  )
}


export default App
