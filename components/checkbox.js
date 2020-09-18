export default function Checkbox({ onChange }) {
  return (
    <label className="switch" for="checkbox">
      <input type="checkbox" id="checkbox" onChange={onChange} />
      <div className="slider round"></div>
    </label>
  )
}
