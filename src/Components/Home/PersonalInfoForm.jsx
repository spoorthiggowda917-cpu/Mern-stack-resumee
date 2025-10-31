import { User } from 'lucide-react'
import React from 'react'

function PersonalInfoForm({ data, onChange, removeBackground, setRemoveBackground }) {

    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value })
    }
/*creates a new updated object — a copy of the old data, but with one field changed.
...data → copies all existing personal info (like name, email, etc.)
[field]: value → updates or adds one property.
[data = { name: "Spoorthi", email: "spoorthi@gmail.com" }
handleChange("email", "newemail@gmail.com")
 Result:
{ name: "Spoorthi", email: "newemail@gmail.com" }]
 */

    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <p className="text-sm text-gray-600">Get Started with the personal information</p>

            <div className="flex items-center gap-2">

                <label>
                    {data.image ? (
                        <img src={typeof data.image === "string" ? data.image : URL.createObjectURL(data.image)}
                            alt="user-image" className='w-15 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80' />
                    ) : (
                        <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
                            <User className='size-10 p-2.5 border rounded-full' />
                            upload user image
                        </div>

                    )}
{/*✅ If it’s a "string" → the browser already knows how to fetch it (from internet or your database).
⚙️ If it’s a File → the browser doesn’t yet have a real URL,
so URL.createObjectURL() creates a temporary one like blob:http://localhost/....*/}


                    <input type='file' accept='image/jpeg,image/png' className='hidden'
                        onChange={(e) => handleChange("image", e.target.files[0])} />
                </label>

                {/*Background remove toggle*/}
                {typeof data.image === 'object' && (
  <div className="flex flex-col gap-2 pl-4 text-sm mt-2">
    <p className="font-medium text-gray-700">Remove Background</p>

    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => setRemoveBackground(prev => !prev)}
        checked={removeBackground}
      />
      <div className="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-300"></div>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
    </label>
  </div>
)}

            </div>
        </div>
    )
}

export default PersonalInfoForm
