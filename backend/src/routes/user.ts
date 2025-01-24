import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@vimal.sde/medium-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
      }).$extends(withAccelerate());
  
    const body = await c.req.json();

    const {success} = signupInput.safeParse(body);

    if(!success){
      c.status(411); //bad request
      return c.json({ msg : 'Input is invalid'})
    } 
  
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name : body.name
      },
    })
  
    const token = await sign( {id: user.id}, c.env.JWT_SECRET)
  
    return c.json({ token });
  })
  
  
  //signin route
  userRouter.post('/signin', async (c) => {
    const prisma  = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);

    if(!success){
      c.status(411); //bad request
      return c.json({ msg : 'Input is invalid'})
    }

    const user = await prisma.user.findUnique({
      where: {
        username : body.username,
        password: body.password
      }
    })
  
    if(!user){
      c.status(403); //unauthorized
      return c.json({ error : 'Invalid credentials' })
    }
  
    const token = await sign( { id: user.id}, c.env.JWT_SECRET)
  
    return c.json({ token })
  })