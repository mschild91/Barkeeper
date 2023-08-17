import { Input, Textarea, Button } from "@material-tailwind/react"
import React from "react"
import formImageOne from "../../assets/img/form-image-1.png"
import formImageTwo from "../../assets/img/form-image-2.png"
import formImageThree from "../../assets/img/form-image-3.png"

const CreateOwnDrink = () => {
  return (
    <section className="gap-24 pt-10 pb-10 bg-gray-300 text-project-blue xl:flex xl:justify-center">
      <div>
        <h1 className="pb-10 text-3xl text-center font-playfair xl:text-left xl:ml-32">
          Create your own Drinks!
        </h1>
        <form className="flex flex-col gap-3 m-auto w-80 xl:ml-32">
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
              color={"orange"}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden xl:block xl:relative xl:w-full">
        <img
          src={formImageOne}
          alt=""
          className="absolute top-96 left-14 rounded-2xl"
        />
        <img
          src={formImageTwo}
          alt=""
          className="absolute top-20 left-80 rounded-2xl"
        />
        <img
          src={formImageThree}
          alt=""
          className="absolute top-36 left-4 rounded-2xl"
        />
      </div>
    </section>
  )
}

export default CreateOwnDrink
