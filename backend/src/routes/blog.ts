import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@vimal.sde/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string,
    },
    Variables: {
        userId: string
    }
}>();

// middleware
blogRouter.use('/*', async (c,next) => {
    const header = c.req.header('Authorization') || '';
    try{
        const user = await verify(header, c.env.JWT_SECRET)
        if(user){
            //@ts-ignore
            c.set("userId", user.id)
            await next();
        } else{
            c.status(403)
            return c.json({ error : 'Unauthorized'})
        }
    } catch(e){            
        c.status(403)
        return c.json({ error : 'Unauthorized'})
    }
})

//create blog
blogRouter.post('/create', async(c) => {
    const body = await c.req.json();

    const {success} = createBlogInput.safeParse(body);
    if (!success){
        c.status(411)
        return c.json({
            msg : "Input is invalid"
        })
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    const blog = await prisma.post.create({
        data: {
            title : body.title,
            content : body.content,
            authorId : Number(authorId)
        }
    })

    return c.json({
        id: blog.id
    })
})


//update blog
blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const {success} = updateBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            msg : "Input is invalid"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
        where: {
            id : body.id
        }, 
        data: {
            title : body.title,
            content : body.content,
        }
    })

    return c.json({
        id: blog.id
    })
})



//todo: add pagination
blogRouter.get("/bulk" ,async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
        select: {
            content : true,
            id : true,
            title : true,
            author : {
                select : {
                    name : true
                }
            }
    }});

    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id : Number(id)
            },
            select : {
                id : true,
                content: true,
                title: true,
                author : {
                    select : {
                        name : true
                    }
                }
            }
        })

        return c.json({
            blog
        })
    } catch(e){
        c.status(404);
        return c.json({
            error : 'Blog not found'
        })
    }
})
