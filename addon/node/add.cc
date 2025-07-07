#include <node.h>

void Add(const v8::FunctionCallbackInfo<v8::Value> &args)
{
  v8::Isolate *isolate = args.GetIsolate();

  if (args.Length() < 2)
  {
    isolate->ThrowException(
        v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Wrong number of arguments")
                .ToLocalChecked()));
    return;
  }

  if (!args[0]->IsNumber() || !args[1]->IsNumber())
  {
    isolate->ThrowException(
        v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Wrong arguments")
                .ToLocalChecked()));
    return;
  }

  double left = args[0].As<v8::Number>()->Value();
  double right = args[1].As<v8::Number>()->Value();
  v8::Local<v8::Number> sum = v8::Number::New(isolate, left + right);

  args.GetReturnValue().Set(sum);
}

void Init(v8::Local<v8::Object> exports)
{
  NODE_SET_METHOD(exports, "add", Add);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)