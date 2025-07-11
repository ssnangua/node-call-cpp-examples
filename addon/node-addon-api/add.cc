#include <napi.h>

// using namespace Napi;

Napi::Value Add(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  if (info.Length() < 2)
  {
    Napi::TypeError::New(env, "Wrong number of arguments")
        .ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber())
  {
    Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  double left = info[0].As<Napi::Number>().DoubleValue();
  double right = info[1].As<Napi::Number>().DoubleValue();
  Napi::Number num = Napi::Number::New(env, left + right);

  return num;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set(Napi::String::New(env, "add"), Napi::Function::New(env, Add));
  return exports;
}

NODE_API_MODULE(add, Init)