// COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  return (
    <main>
      <div className="flex flex-col space-y-5 py-3">
        <div className="flex flex-col items-center gap-3 px-3 py-6">
          <div className="size-44 overflow-hidden rounded-full border-2 border-foreground bg-secondary">
            <img src="./hero.png" alt="" className="size-full" />
          </div>
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Jackson Aaron Taylor
          </h1>
          <div className="flex items-center gap-3">
            <Button size={"sm"} variant={"destructive"}>
              Logout
            </Button>
            <Button size={"sm"} variant={"destructive"}>
              Delete Account
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-2">
          <Tabs
            defaultValue="changeName"
            className="w-96 space-y-2 md:w-[600px]"
          >
            <h1 className="py-2 text-left text-base font-medium md:text-xl">
              *You can change your personal information here.
            </h1>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="changeName">Name</TabsTrigger>
              <TabsTrigger value="changeEmail">Email</TabsTrigger>
              <TabsTrigger value="changePassword">Password</TabsTrigger>
              <TabsTrigger value="changeAvatar">Avatar</TabsTrigger>
            </TabsList>
            <TabsContent value="changeName">
              <Card>
                <CardHeader>
                  <CardTitle>Change your name here.</CardTitle>
                  <CardDescription>
                    Type the name you want your name to be changed into and in
                    the placeholder you can see your current name
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="" className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="change_name">Enter new name here.</Label>
                      <Input
                        id="change_name"
                        placeholder="Jackson Aaron Taylor"
                      />
                    </div>
                    <Button className="w-full">Apply Change</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="changeEmail">
              <Card>
                <CardHeader>
                  <CardTitle>Change your email here.</CardTitle>
                  <CardDescription>
                    Type the email you want your email to be changed into and in
                    the placeholder you can see your current email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="" className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="change_name">Enter new email here.</Label>
                      <Input id="change_name" placeholder="jackaart@mail.com" />
                    </div>
                    <Button className="w-full">Apply Change</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="changePassword">
              Working on this feature.
            </TabsContent>
            <TabsContent value="changeAvatar">
              Working on this feature.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

/*   */
