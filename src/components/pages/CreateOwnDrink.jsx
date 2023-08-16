import { Input, Textarea, Button } from '@material-tailwind/react'
import React from 'react'

const CreateOwnDrink = () => {
  return (
    <section className="pt-10 pb-10 bg-gray-300 text-project-blue">
      <h1 className="pb-10 text-3xl text-center font-playfair">Create your own Drinks!</h1>
      <form className="flex flex-col gap-3 m-auto w-80">
        <Input
          size="lg"
          label="Name"
          color="amber"
        />
        <Input
          size="lg"
          label="Category"
          color="amber"
        />
        <Input
          size="lg"
          label="Picture URL"
          color="amber"
        />
        <Textarea
          className="text-project-white placeholder:text-project-white"
          color="amber"
          label="Instructions"
        />
        <Input
          size="lg"
          label="Ingredient 1"
          color="amber"
        />
        <Input
          size="lg"
          label="Measure of Ingredient 1"
          color="amber"
        />
        <Input
          size="lg"
          label="Ingredient 2"
          color="amber"
        />
        <Input
          size="lg"
          label="Measure of Ingredient 2"
          color="amber"
        />
        <Input
          size="lg"
          label="Ingredient 3"
          color="amber"
        />
        <Input
          size="lg"
          label="Measure of Ingredient 3"
          color="amber"
        />
        <div className="flex justify-center pt-4">
          <Button
            className="w-60"
            size="sm"
            color={'orange'}>
            Submit
          </Button>
        </div>
      </form>
    </section>
  )
}

export default CreateOwnDrink
