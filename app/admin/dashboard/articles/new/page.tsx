'use client'
import Link from "next/link"

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const NewArticle = () => {
  return (
    <>
    <div className="flex justify-between">
      <h3>Create new article</h3><Link href={"../"}><button className="rounded bg-yellow-500 px-3">Back</button></Link>
    </div>
    <textarea name="" id=""></textarea>
    <button className="rounded bg-green-700 px-3 text-white">Submit</button>
    </>
  )
}

export default NewArticle