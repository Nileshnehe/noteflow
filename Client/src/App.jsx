import React from 'react'
import NoteCard from './components/notes/NoteCard'

const App = () => {

  const testNote = {
    
    id: '1',
    title: 'My first note',
    content: 'This is a test note to see how the card looks on screen This is a test note to see how the card looks on screen This is a test note to see how the card looks on screen.',
    tags: ['Work', 'Personal'],
    createdAt: Date.now()

    
  }
  return (
    <div className='min-h-screen bg-surface px-md py-lg'>
      <NoteCard 
        note={testNote}
        onEdit={(note) => console.log('edit', note)}
        onDelete={(id) => console.log('delete', id)}
      />
    </div>
  )
}

export default App