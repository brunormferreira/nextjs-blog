export default function Checkbox({ onChange }) {
  return (
    <label className="switch" htmlFor="checkbox">
      <input type="checkbox" id="checkbox" onChange={onChange} />
      <div className="slider round"></div>
    </label>
  )
}
