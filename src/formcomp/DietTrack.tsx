


export default function DietTrack() {


  return (
    <div>
      <h1>Diet</h1>
      <section>
        <label>Carbs</label>
        <input type="number" min="1" max="10" />
        <label>g</label>
      </section>

      <section>
        <label>Protein</label>
        <input type="number" min="1" max="10" />
      <label>g</label>
      </section>

      <section>
        <label>Fiber</label>
        <input type="number" min="1" max="10" />
      <label>g</label>
      </section>
    </div>
  )
}