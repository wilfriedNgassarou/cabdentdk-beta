export default function Terms({checked, onChange}) {

  return (
    <div className="terms">
      <label htmlFor="accept-terms">
        <input 
          checked={ checked } 
          onChange={(e) => onChange(e.target.checked)} 
          type="checkbox" 
          name="accept-terms" 
          id="accept-terms" 
        />
        <span></span>
      </label>
      <span className="terms-text">
        En cochant cette case, vous nous autorisez à vous envoyer des e-mails et messages.
      </span>
    </div>
  )
}