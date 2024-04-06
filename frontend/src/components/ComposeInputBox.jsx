export function ComposeInputBox({label, placeholder,onChange}) {
    return <div className="flex">
      <div className="text-sm font-medium text-left py-2 ">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full overflow-auto px-2 py-1 border rounded border-slate-200" />
    </div>
}

