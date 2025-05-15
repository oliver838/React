import React from 'react'

export const MyImagee = ({nr, name, id}) => {
  console.log(nr);
  const url = `https://picsum.photos/id/${nr}/200/300`
  return (
    <div>
      <img src={url} alt="lorem" />
    </div>
  )
}