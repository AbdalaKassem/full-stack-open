const Filter = (props) => {
  return (
    <div>
        filter shown with <input value={props.searchName} onChange={props.searchHandler}/>
      </div>
  )
}

export default Filter