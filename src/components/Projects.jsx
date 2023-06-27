import { useContext, useEffect, useState } from 'react'
import { deleteDocument, getDocuments } from '../helpers/firebase/CloudFirestore'
import { UserContext } from '../context/UserContext'

export function Projects() {
  const { uid } = useContext(UserContext)

  const [data, setData] = useState([])
  useEffect(() => {
    getDocuments('prueba').then(datos => setData(datos))
  }, [])

  const deletePrueba = async (idDoc) => {
    try {
      await deleteDocument('prueba', idDoc)
      const tmp = data.filter(function (item) {
        if (item.idDoc !== idDoc) return item
      })
      setData(tmp)
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  const handleDelete = idDoc => {
    if (!confirm(`¿Confirma que desea eliminar el documento ${idDoc}?`)) return
    deletePrueba(idDoc)
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-white mb-4 text-right bg-slate-800 p-4">Mis proyectos</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          data.map(item => (
            <div key={item.idDoc} className="bg-stone-300 p-4 rounded-lg hover:bg-blue-200 hover:text-stone-800">
              <div className="font-bold flex justify-between">
                <div>{item?.titulo}</div>
                {uid && <button onClick={() => handleDelete(item.idDoc)} className="ml-3">
                  <img src="./public/delete.svg" alt="eliminar" className="w-6 h-6" />
                </button>}
              </div>
              <div>{item?.descripcion}</div>
              <br />
              <a className='bg-slate-800 p-2 rounded-lg text-white font-semibold' href={item?.github} rel='noreferrer' target='_blank'>Ver en GitHub</a>
            </div>
          ))
        }
      </div>
    </>
  )
}

