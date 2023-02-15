import React from 'react'

const WidgetTags = () => {
    const tags=['c','css','express','firebase','html','']
  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>(
                    <p
                      Key={tag} > {tag}
                    </p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags