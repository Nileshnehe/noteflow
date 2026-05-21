import { data } from 'autoprefixer'
import React from 'react'

const NoteCard = ({ note, onEdit, onDelete }) => {
  const { title, content, tags, createdAt } = note
  return (
    <div>
      <h3>{title}</h3>

      <p>{content}</p>


      {/* Tags row */}
      {tags && tags.length > 0 && (
        <div>
          {tags.map((tag) => (
            <span
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
{/* Footer — date left, buttons right */}
<div>
  <small>
    {new Date(createdAt).toLocaleDateString('en-IN', {
      day: `numeric`,
      month: 'short',
      year: 'numeric'
    })}
  </small>

  <div>

    <button onClick={() => onEdit(note)}>Edite</button>
    
    <button onClick={() => onDelete(note.id)}>Delete</button>
  </div>
</div>

    </div>
  )
}

export default NoteCard