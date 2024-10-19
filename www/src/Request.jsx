/* starter: https://ui.shadcn.com/docs/components/form */

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormLabel, FormDescription, FormItem, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import NavBar from "./components/ui/NavBar"

const submitFormSchema = z.object({
    test: z.string()
})

export default function Submit() {
    const form = useForm({
        resolver: zodResolver(submitFormSchema),
        defaultValues: {
            test: 'hello world'
        }
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <>
            <NavBar />
            <div>
                <h1>Request Help</h1>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField name='test' control={form.control} render={({field}) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormDescription>This is a form.</FormDescription>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <Button type='Submit'>Submit</Button>
                </form>
            </Form>
        </>
    )
}