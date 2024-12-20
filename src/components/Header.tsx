type Pet = {
  animalType: string,
  name: string
}

type Props = {
  username: string,
  age: number,
  isAgeVisible: boolean,
  pet: Pet,
  menu: string[]
}

const Header = ({ username, age, isAgeVisible, pet, menu }: Props) => {
  const isRed = false

  return (
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isRed ? "red" : "transparent"
      }}>
      <div className="logo">OUR LOGO</div>
      <nav>
        <menu style={{ display: "flex", gap: '2rem', listStyle: "none", margin: 0, padding: 0 }}>
          {menu.map((item, i) => (
            <li key={i}>
              <a href={`/${item}`}>{item.toUpperCase()}</a>
            </li>
          ))}
        </menu>
      </nav>
      <div>
        <span>Hello {username ?? "guest"} </span>
        {isAgeVisible ? (
          <span>Age: {age}</span>
        ) : (
          <span>Age: Hidden</span>
        )}
      </div>
      <div>Pet: {pet.name}</div>
    </header>
  )
}

export default Header