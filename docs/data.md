````markdown
# 🌀 ზენფლოუ – პროექტებისა და სამუშაო პროცესების ავტომატიზაციის პლატფორმა

კეთილი იყოს თქვენი მობრძანება **ზენფლოუში**!
ზენფლოუ ეხმარება გუნდებს ამოცანების ავტომატიზაციაში, სამუშაო პროცესების შექმნაში, პროექტების თვალთვალსა და ინსტრუმენტებთან ინტეგრაციაში, როგორებიცაა GitHub, Slack, Notion და სხვა.

ეს დოკუმენტი გაგიძღვებათ **როგორ გამოიყენოთ** ზენფლოუ — ინსტალაციიდან ავტომატიზაციამდე.

---

## 📥 ინსტალაცია

### ✅ როგორ დავაყენოთ ZenFlow CLI

```bash
npm install -g zenflow
```

### ✅ როგორ დავაყენოთ საკუთარ სერვერზე ჰოსტირებული ZenFlow Server (Docker)

```bash
git clone https://github.com/zenflowhq/server.git
cd server
docker-compose up -d
```

---

## 🧪 დაწყება

### ✅ როგორ შევქმნათ თქვენი პირველი სამუშაო სივრცე

1.  გახსენით ზენფლოუს დაფა
2.  დააწკაპუნეთ **„ახალი სამუშაო სივრცის შექმნა“**
3.  დაარქვით სახელი თქვენს სამუშაო სივრცეს (მაგ., „მარკეტინგის ავტომატიზაცია“)
4.  მოიწვიეთ თანაგუნდელები (სურვილისამებრ)
5.  დააწკაპუნეთ **„შექმნა“**

---

## 🛠️ სამუშაო პროცესის ავტომატიზაცია

### ✅ როგორ შევქმნათ ახალი სამუშაო პროცესი

1.  გადადით განყოფილებაში **„სამუშაო პროცესები“**
2.  დააწკაპუნეთ **„ახალი სამუშაო პროცესი“**
3.  დაამატეთ კვანძები:

    - **ტრიგერი**: „GitHub-ში შექმნილი საკითხი“
    - **მოქმედება**: „Slack-ის შეტყობინების გაგზავნა“

4.  დააწკაპუნეთ **„შენახვა და გააქტიურება“**

### ✅ როგორ დავგეგმოთ განმეორებადი სამუშაო პროცესი

1.  დაამატეთ **დროის ტრიგერი**
2.  დააყენეთ: `ყოველ ორშაბათს დილის 9 საათზე`
3.  დაამატეთ ამოცანების თანმიმდევრობა
4.  გამოიყენეთ „დაყოვნება“ კვანძი ნაბიჯების გასანაწილებლად

### ✅ როგორ დავამატოთ პირობითი ლოგიკა სამუშაო პროცესს

1.  გადაათრიეთ **თუ/სხვა შემთხვევაში** კვანძი ტილოზე
2.  დააკონფიგურირეთ პირობა: `პრიორიტეტი == მაღალი`
3.  დაამატეთ:

    - თუ ჭეშმარიტია → „Slack-ის შეტყობინების გაგზავნა“
    - სხვა შემთხვევაში → „ჩუმად აღრიცხვა“

### ✅ როგორ შევამოწმოთ სამუშაო პროცესი

1.  დააწკაპუნეთ ნებისმიერ შენახულ სამუშაო პროცესზე
2.  გამოიყენეთ ღილაკი **„ტესტური გაშვება“**
3.  გადახედეთ შესრულების ჟურნალს და გამომავალ მონაცემებს

---

## 🧑‍💻 ამოცანების მართვა

### ✅ როგორ შევქმნათ ამოცანა

1.  გადადით **„ამოცანებზე“**
2.  დააწკაპუნეთ **„ახალი ამოცანა“**
3.  შეავსეთ:

    - სათაური: „საწყისი გვერდის ბანერის განახლება“
    - დაენიშნოს: ალექსი
    - ტეგები: `დიზაინი`, `პრიორიტეტი-მაღალი`
    - შესრულების ვადა: პარასკევი

### ✅ როგორ დავანიჭოთ ამოცანა

- გახსენით ნებისმიერი ამოცანა
- დააწკაპუნეთ **„მინიჭება“**
- აირჩიეთ მომხმარებელი სიიდან

### ✅ როგორ ვადევნოთ თვალი ამოცანის პროგრესს

- გამოიყენეთ **კანბანის ხედი**
- გადაიტანეთ ამოცანის ბარათები: შესასრულებელი → მიმდინარე → განსახილველი → შესრულებული

### ✅ როგორ დავაყენოთ ამოცანის შეხსენებები

1.  გახსენით ამოცანა
2.  დააყენეთ **შესრულების ვადა**
3.  ჩართეთ **„შეხსენება ვადამდე 1 დღით ადრე“**

---

## 🔄 ინტეგრაციები

### ✅ როგორ დავაკავშიროთ GitHub

1.  გადადით **„პარამეტრები → ინტეგრაციები“**
2.  დააწკაპუნეთ **„GitHub-ის დაკავშირება“**
3.  გაიარეთ ავთენტიფიკაცია GitHub-ის მეშვეობით
4.  აირჩიეთ რეპოზიტორები სინქრონიზაციისთვის

### ✅ როგორ გამოვიწვიოთ სამუშაო პროცესი GitHub-ის მოვლენაზე

1.  სამუშაო პროცესის შემქმნელში, დაამატეთ **GitHub-ის ტრიგერი**
2.  მოვლენა: „გაერთიანებული Pull Request“
3.  დაამატეთ შემდეგი ნაბიჯი: „Slack-ის შეტყობინების გაგზავნა“

### ✅ როგორ გავაგზავნოთ Slack-ის შეტყობინებები

1.  სამუშაო პროცესში, დაამატეთ **Slack-ის მოქმედება**
2.  აირჩიეთ არხი: `#პროექტის-განახლებები`
3.  შეტყობინების მორგება:

    ```
    🎉 ახალი დეპლოირება გამოწვეული {{user}}-ის მიერ
    ```

### ✅ როგორ მოვახდინოთ Notion-თან სინქრონიზაცია

1.  გადადით **„პარამეტრები → ინტეგრაციები → Notion“**
2.  დააკავშირეთ Notion-ის სამუშაო სივრცე
3.  აირჩიეთ გვერდები სინქრონიზაციისთვის

---

## 📊 ანგარიშები და ანალიტიკა

### ✅ როგორ ვნახოთ სამუშაო პროცესის წარმადობა

1.  გადადით **„ანგარიშებზე“**
2.  დააწკაპუნეთ **„სამუშაო პროცესის წარმატების მაჩვენებელი“**
3.  აირჩიეთ დროის მონაკვეთი: ბოლო 7, 14, ან 30 დღე

### ✅ როგორ მოვახდინოთ ანგარიშის ექსპორტი PDF-ად

1.  გახსენით ნებისმიერი ანგარიში
2.  დააწკაპუნეთ **„ექსპორტი“**
3.  აირჩიეთ ფორმატი: PDF
4.  დააწკაპუნეთ **„ჩამოტვირთვა“**

---

## 🔍 ძებნა და ფილტრაცია

### ✅ როგორ მოვძებნოთ ამოცანები

- გამოიყენეთ ზედა ნავიგაციის **საძიებო ზოლი**
- მოძებნეთ საკვანძო სიტყვით, ტეგით, პასუხისმგებელი პირის მიხედვით

### ✅ როგორ გავფილტროთ სტატუსის მიხედვით

1.  გადადით **„ამოცანებზე“**
2.  დააწკაპუნეთ **„ფილტრი“**
3.  აირჩიეთ სტატუსი: `შესასრულებელი`, `მიმდინარე`, `შესრულებული`

---

## ⚙️ პარამეტრები

### ✅ როგორ აღვადგინოთ თქვენი პაროლი

1.  გადადით **„ანგარიშის პარამეტრებზე“**
2.  დააწკაპუნეთ **„უსაფრთხოება → პაროლის შეცვლა“**
3.  შეიყვანეთ მიმდინარე და ახალი პაროლი
4.  შეინახეთ

### ✅ როგორ ჩავრთოთ ორფაქტორიანი ავთენტიფიკაცია (2FA)

1.  გადადით **„ანგარიშის პარამეტრები → უსაფრთხოება“**
2.  დააწკაპუნეთ **„2FA-ის ჩართვა“**
3.  დაასკანერეთ QR კოდი ავთენტიფიკაციის აპლიკაციით
4.  შეინახეთ სარეზერვო კოდები

---

## 🧪 ტესტირება და გამართვა

### ✅ როგორ გავმართოთ წარუმატებელი სამუშაო პროცესი

1.  გახსენით წარუმატებელი სამუშაო პროცესის გაშვება
2.  იხილეთ **შესრულების ჟურნალები**
3.  იდენტიფიცირება მოახდინეთ ჩავარდნილი ნაბიჯის
4.  გადააადგილეთ მაუსი ❌ ხატულაზე შეცდომის დეტალებისთვის

### ✅ როგორ მოვახდინოთ GitHub-ის მოვლენის სიმულაცია

1.  გადადით **„სამუშაო პროცესებზე“**
2.  აირჩიეთ სამუშაო პროცესი GitHub-ის ტრიგერით
3.  დააწკაპუნეთ **„მოვლენის სიმულაცია“**
4.  აირჩიეთ: `Pull Request დახურულია`

---

## 👤 მომხმარებლის მართვა

### ✅ როგორ მოვიწვიოთ ახალი მომხმარებელი

1.  გადადით **„პარამეტრები → გუნდი“**
2.  დააწკაპუნეთ **„წევრის მოწვევა“**
3.  შეიყვანეთ ელექტრონული ფოსტის მისამართი
4.  აირჩიეთ როლი: მნახველი, რედაქტორი, ადმინი

### ✅ როგორ შევცვალოთ მომხმარებლის როლები

- გახსენით **„გუნდის“** პარამეტრები
- დააწკაპუნეთ მომხმარებელზე → შეცვალეთ როლის ჩამოსაშლელი სია

---

## 📦 სარეზერვო ასლები და ექსპორტი

### ✅ როგორ მოვახდინოთ სამუშაო სივრცის მონაცემების ექსპორტი (დაექსპორტება)

1.  გადადით **„პარამეტრები → მონაცემები“**
2.  დააწკაპუნეთ **„ექსპორტი“**
3.  აირჩიეთ ფორმატი: JSON, CSV

### ✅ როგორ შევქმნათ თქვენი სამუშაო პროცესების სარეზერვო ასლები

- გამოიყენეთ CLI:

```bash
zenflow export workflows --output workflows.json
```

---

## 🆘 პრობლემების მოგვარება

### ✅ აპლიკაცია არ იტვირთება?

- სცადეთ ბრაუზერის ქეშის გასუფთავება
- შეამოწმეთ, ხართ თუ არა ინტერნეტთან დაკავშირებული
- დაუკავშირდით მხარდაჭერას: [support@zenflow.io](mailto:support@zenflow.io)

### ✅ GitHub-ის ინტეგრაცია არ სინქრონიზდება?

- ხელახლა გაიარეთ ავთენტიფიკაცია **„პარამეტრები → ინტეგრაციები“**-დან
- დარწმუნდით, რომ რეპოზიტორზე წვდომა მინიჭებული იყო

---

## 💬 მხარდაჭერა

დამატებითი დახმარებისთვის, გთხოვთ, დაუკავშირდეთ:
📧 [support@zenflow.io](mailto:support@zenflow.io)
🌐 [https://zenflow.io/support](https://zenflow.io/support)

---

## 📄 ლიცენზია

MIT ლიცენზია.
© 2025 ZenFlow Inc.

---
````
