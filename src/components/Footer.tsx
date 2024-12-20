type Props = {
  onAlert: (message: string) => void
}

const Footer = ({ onAlert }: Props) => {
  return (
    <footer>
      <p>Copyright 2025. All rights reserved.</p>
      <button onClick={() => onAlert("world!!!!")}>Click me</button>
    </footer>
  )
}

export default Footer