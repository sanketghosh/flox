import { useForm } from "react-hook-form";
import AuthCard from "./auth-card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type LoginFormProps = {
  isLoginCard?: boolean;
  toggleAuthCard?: () => void;
};

export default function LoginForm({
  isLoginCard,
  toggleAuthCard,
}: LoginFormProps) {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <AuthCard
      cardDescription="Welcome back to Flox ! Start from exactly where you left."
      isLoginCard={isLoginCard}
      toggleAuthCard={toggleAuthCard}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="carlahernan@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="1133f7ed9f1c2f7d1dae"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
