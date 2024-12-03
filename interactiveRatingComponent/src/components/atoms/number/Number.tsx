interface DataItem {
    id: number;
    number: string;
}
const data: DataItem[] = [
    {
        id: 1,
        number: '1'
    },
    {
        id: 2,
        number: '2'
    },
    {
        id: 3,
        number: '3'
    },
    {
        id: 4,
        number: '4'
    },
    {
        id: 5,
        number: '5'
    },
]
const Number = () => {
  return (
    <div>
        <p>asdsadsadsa</p>
        {data.map((item, index) => {
            return (
                <p key={index}>{item.number}sad</p>
            )
        })}
    </div>
  )
}

export default Number;