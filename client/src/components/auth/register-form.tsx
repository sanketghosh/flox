// PACKAGES
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import * as registerUser from "@/actions/auth/register-user";

// COMPONENTS
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/auth-card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type RegisterFormProps = {
  isLoginCard?: boolean;
  toggleAuthCard?: () => void;
};

export default function RegisterForm({
  isLoginCard,
  toggleAuthCard,
}: RegisterFormProps) {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: registerUser.registerUser,

    onSuccess: async (data) => {
      localStorage.setItem("user_details", JSON.stringify(data.user));
      toast.success(data.message);
      setInterval(() => {
        navigate("/on-boarding");
      }, 1000);
    },

    onError: async (error: Error) => {
      toast.error(error.message);
    },
  });

  function handleFormSubmit(values: z.infer<typeof RegisterSchema>) {
    mutation.mutate(values);
    console.log(values);
  }

  return (
    <AuthCard
      cardDescription="Thanks, for choosing Flox! Create an account to get started."
      isLoginCard={isLoginCard}
      toggleAuthCard={toggleAuthCard}
    >
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleFormSubmit)}
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Carla" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Hernandez" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
            Register
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
